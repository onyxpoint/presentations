<table width=100%>
  <tr>
    <td style="text-align: left"><h3>
        **Type**
    </h3></td>
    <td width=65% style="text-align: right"><h3>
        Autorequires
    </h3></td>
  </tr>
</table>

<pre><code data-trim class="ruby">

autorequire(:file) do
  Puppet.warning("#{self[:name]}: Autorequring")
  ["/tmp/foo"]
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: test: Autorequring

</code></pre>
