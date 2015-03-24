<table width=100%>
  <tr>
    <td style="text-align: left">
        <h3>**Type**</h3>
    </td>
    <td width=65% style="text-align: right">
        <h3>Parameter|Foo</h3>
    </td>
  </tr>
</table>

<pre><code data-trim class="ruby">

# newparam(:foo) do
# newproperty(:baz) do
# newparam(:bar) do

</code></pre>

<pre><code data-trim class="ruby">

newparam(:foo) do
  validate do |value|
    Puppet.warning("#{resource[:name]}: Param :foo -> Validating")
  end

  munge do |value|
    Puppet.warning("#{resource[:name]}: Param :foo -> Munging")
    Puppet.warning("Where's Param :bar? Bar is '#{resource[:bar]}'")
    value
  end
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: test: Param :foo -> Validating
warning: test: Param :foo -> Munging
warning: Where's Param :bar? Bar is ''

</code></pre>
