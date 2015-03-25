<table width=100%>
  <tr>
    <td style="text-align: left"><h3>
        **Provider**
    </h3></td>
    <td width=65% style="text-align: right"><h3>
        Baz|Setter
    </h3></td>
  </tr>
</table>

<pre><code data-trim class="ruby">

Puppet::Type.type(:example_type).provide(:ruby) do
  def baz=(should)
    # Called if insync? is false
    Puppet.warning("#{@resource[:name]}: In setter for :baz")
  end
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: test: In setter for :baz
notice: /Stage[main]/Main/Ex_order[test]/baz: baz changed
        'test: In getter for :baz' to 'baz'

</code></pre>
