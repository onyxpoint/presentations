#!/usr/bin/rake -T

# This Rakefile is used for building the presentation from the modified presentation base.

require 'erb'
require 'find'
require 'rake/clean'

### General Presentation Information ###
TITLE = 'Puppet Type and Provider Execution'
DESCRIPTION = 'A presentation that covers the execution of types and providers across both the Puppet server and client.'
AUTHOR = 'Trevor Vaughan - Onyx Point, Inc.'
GLOBAL_HEADER = 'Puppet Type and Provider Execution'
### End General Presentation Information ###

### Slide Management ###

FIRST_SLIDE = '00'
LAST_SLIDE = '999'

# A template for creating new slides.
SLIDE_TEMPLATE = <<-EOM
<section>
</section>
EOM

### End Slide Management ###

BUILD_DIR = 'build'
SLIDE_DIR = 'slides'
REVEAL_JS_SRC = 'https://github.com/onyxpoint/reveal.js'

CLOBBER.include(
  BUILD_DIR
)

def sorted_slides
  Dir.chdir(SLIDE_DIR) do
    Dir.glob('*').sort_by{|f| File.basename(f,'.html').split('_').first.to_i}.each do |x|
      if File.directory?(x) or x =~ /\.html$/
        yield(x)
      end
    end
  end
end

# This can handle nested slides, unfortunately the header mods by Ciges
# currently cause issues with vertical scrolling.
def build_slides(slides)
  sorted_slides do |slide|
    if File.directory?(slide)
      slides << '<section>'
    elsif slide =~ /\.html$/
      slides << File.read(slide).chomp
    end

    subdir = File.basename(slide,'.html')
    if File.directory?(subdir)
      Dir.chdir(subdir) do
        build_slides(slides)
      end
    end

    if File.directory?(slide)
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
  slides = build_slides(slides)

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

namespace :slide do
  slide_deck = {}
  sorted_slides do |slide|
    slide_deck[slide.split('_').first.to_i] = slide
  end

  Dir.chdir(SLIDE_DIR) do

    desc <<-EOM
      Add a slide to the deck
      An optional ID may be provided for the slide and the other slides will be adjusted accordingly.
      EOM
    task :add,[:id] do
      puts 'TBD'
    end
  end
end
