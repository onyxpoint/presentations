<table width=100%>
  <tr>
    <td style="text-align: left"><h3>
        **Type**
    </h3></td>
    <td width=65% style="text-align: right"><h3>
        Initializing
    </h3></td>
  </tr>
</table>

<pre><code data-trim class="ruby">

def initialize(args)
  super(args)

  Puppet.warning("#{self[:name]}: Type Initializing")

  num_example_types = @catalog.resources.find_all { |r|
    r.is_a?(Puppet::Type.type(:example_type))
  }.count
  Puppet.warning("Ex_order's in the catalog: '#{num_example_types+1}'")
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: test: Type Initializing
warning: Ex_order's in the catalog: '1'

</code></pre>
