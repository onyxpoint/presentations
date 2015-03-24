<table width=100%>
  <tr>
    <td style="text-align: left"><h3><strong>
        Type
    </strong></h3></td>
    <td width=65% style="text-align: right"><h3>
        Parameter|Bar
    </h3></td>
  </tr>
</table>

<pre><code data-trim class="ruby">

# newparam(:foo) do
# newproperty(:baz) do
# newparam(:bar) do

</code></pre>

<pre><code data-trim class="ruby">

newparam(:bar) do
  Puppet.warning("Param :bar -> Starting")
  validate do |value|
    Puppet.warning("#{resource[:name]}: Param :bar -> Validating")
  end
  munge do |value|
    Puppet.warning("#{resource[:name]}: Param :bar -> Munging")
    Puppet.warning("Where's Param :foo? Foo is '#{resource[:foo]}'")
    value
  end
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: test: Param :bar -> Validating
warning: test: Param :bar -> Munging
warning: test: Where's Param :foo? Foo is 'foo' <- Order Matters!

</code></pre>
