<table width=100%>
  <tr>
    <td style="text-align: left">

<h3>**Type**</h3>

    </td>
    <td width=65% style="text-align: right">

<h3>Properties and Parameters</h3>

    </td>
  </tr>
</table>

<pre><code data-trim class="ruby">

newparam(:name) do isnamevar end

newparam(:foo) do
  Puppet.warning("Param :foo -> Starting")
end

newproperty(:baz) do
  Puppet.warning("Property :baz -> Starting")
end

newparam(:bar) do
  Puppet.warning("Param :bar -> Starting")
end

</code></pre>

**Output**

<pre><code data-trim>

warning: Param :foo -> Starting
warning: Property :baz -> Starting
warning: Param :bar -> Starting

</code></pre>
