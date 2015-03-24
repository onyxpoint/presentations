<table width=100%>
  <tr>
    <td style="text-align: left">
      <h3>**Type**</h3>
    </td>
    <td width=65% style="text-align: right">
          <h3>Property|Baz</h3>
    </td>
  </tr>
</table>

<pre><code data-trim class="ruby">

# newparam(:foo) do
# newproperty(:baz) do
# newparam(:bar) do

</code></pre>

<pre><code data-trim class="ruby">

 newproperty(:baz) do
  validate do |value|
    Puppet.warning("#{resource[:name]}: :baz -> Validating")
    Puppet.warning("#{resource[:name]}: Foo -> '#{resource[:foo]}'")
  end
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: test: Property :baz -> Validating
warning: test: Foo -> ''

</code></pre>
