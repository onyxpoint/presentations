###Type Scaffold

<pre><code data-trim class="ruby">

module Puppet
  newtype(:ex_order) do
    def initialize(args) super(args) end

    def finish(args) super end

    newparam(:name) do
      desc "Everybody needs a name!"
      isnamevar
    end

    newparam(:foo) do desc "Foo!" end

    newproperty(:baz) do desc "Property Baz" end

    newparam(:bar) do desc "Parameter Bar" end

    validate do true end

    autorequire(:file) do ['/tmp/foo'] end
  end
end

</code></pre>
