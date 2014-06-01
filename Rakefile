#!/usr/bin/rake -T

# This Rakefile is used for building the presentation from the modified presentation base.

require 'erb'
require 'find'
require 'rake/clean'

TITLE = 'Interesting Title'
DESCRIPTION = 'My Presentation'
AUTHOR = 'My Name'
GLOBAL_HEADER = 'Header Words'
BUILD_DIR = 'build'
REVEAL_JS_SRC = 'https://github.com/onyxpoint/reveal.js'

CLOBBER.include(
  BUILD_DIR
)

# This can handle nested slides, unfortunately the header mods by Ciges
# currently cause issues with vertical scrolling.
def build_slides(slides)
  Dir.glob('*').sort_by{|f| File.basename(f,'.html').split('_').last.to_i}.each do |x|
    if File.directory?(x)
      slides << '<section>'
    elsif x =~ /\.html$/
      slides << File.read(x).chomp
    end

    subdir = File.basename(x,'.html')
    if File.directory?(subdir)
      Dir.chdir(subdir) do
        build_slides(slides)
      end
    end

    if File.directory?(x)
      slides << '</section>'
    end
  end

  slides.join("\n")
end

desc "Build the presentation based on #{REVEAL_JS_SRC}"
task :build do
  directory BUILD_DIR

  if not File.directory?(BUILD_DIR)
    sh %{git clone #{REVEAL_JS_SRC} #{BUILD_DIR}}
  else
    Rake::Task['clean'].invoke
  end

  Dir.chdir(BUILD_DIR) do
    FileUtils.mv('LICENSE','LICENSE_reveal.js')
  end

  slides = []
  Dir.chdir('slides') do
    slides = build_slides(slides)
  end

  # Build the index.html file
  File.open('index.html','w') { |fh|
    fh.puts(ERB.new(File.read('index.html.erb'),nil,'-').result(binding))
  }

  sh %{tar --exclude-vcs --exclude='build' --exclude='*.erb' -cf - . | tar -C build -xf -}
end

desc "Reset the bulid directory to a clean state"
task :clean do
  Dir.chdir(BUILD_DIR) do
    puts "== In #{BUILD_DIR} =="
    sh %{git clean -qf}
    sh %{git reset -q --hard HEAD}
    puts "== Leaving #{BUILD_DIR} =="
  end

  Find.find('.') do |f|
    base_file = File.basename(f,'.erb')
    FileUtils.rm(base_file) if File.exist?(base_file) and f =~ /\.erb$/
  end
end

task :default => 'build'
