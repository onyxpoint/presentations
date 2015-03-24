<table width=100%>
  <tr>
    <td style="text-align: left">
      <h3>**Provider**</h3>
    </td>
    <td width=65% style="text-align: right">
      <h3>Initializer</h3>
    </td>
  </tr>
</table>

<pre><code data-trim class="ruby">

def initialize(*args)
  super(*args)
 
  Puppet.warning("Provider Initialization :name= '#{@resource[:name]}'")
  Puppet.warning("Provider Initialization :foo = '#{@resource[:foo]}'")
  Puppet.warning("Provider Initialization :bar = '#{@resource[:bar]}'")
end

</code></pre>

**Output**

<pre><code data-trim>

warning: Provider Initialization :name= 'test'
warning: Provider Initialization :foo = ''
warning: Provider Initialization :bar = ''

</code></pre>
