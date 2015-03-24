<table width=100%>
  <tr>
    <td style="text-align: left">
      <h3>**Type**</h3>
    </td>
    <td width=65% style="text-align: right">
      <h3>Name Parameter Munge</h3>
    </td>
  </tr>
</table>

<pre><code data-trim class="ruby">

newparam(:name) do
  isnamevar
 
  munge do |value|
    Puppet.warning("#{value}: In the name parameter.")
    value
  end
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: test: In the name parameter.

</code></pre>
