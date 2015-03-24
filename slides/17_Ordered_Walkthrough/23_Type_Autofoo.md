<table width=100%>
  <tr>
    <td colspan="2">
      <div style="text-align: center; background-color: #30BF30; color:black; font-weight:bold">
      New in 4.0!
      </div>
    </td>
  </tr>
  <tr>
    <td style="text-align: left"><h3>
      **Type**
    </h3></td>
    <td width=65% style="text-align: right"><h3>
      Auto*(before|after|notify)*
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
