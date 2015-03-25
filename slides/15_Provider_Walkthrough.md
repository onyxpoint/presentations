###Provider Scaffold

<pre><code data-trim class="ruby">

Puppet::Type.type(:example_type).provide(:ruby) do
  $example_type_classvars = { :example =&gt; true }

  def initialize(*args)
    super(*args)
  end

  def baz
    # Get the state of the 'baz' property from the system
  end

  def baz=(should)
    # Set the system to the value of the 'baz' property in Puppet
  end

  def flush
    # If *any* property is not in sync, this will be called
  end

  def self.post_resource_eval
    # Do this afer *all* resources of this type have been called.
    $example_type_classvars = nil
  end
end

</code></pre>
