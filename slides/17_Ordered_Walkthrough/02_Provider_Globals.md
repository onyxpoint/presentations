<table width=100%>
  <tr>
    <td style="text-align: left">
      <h3>**Provider**</h3>

    </td>
    <td width=65% style="text-align: right">
      <h3>Globals</h3>
    </td>
  </tr>
</table>

<pre><code data-trim class="ruby">

Puppet::Type.type(:ex_order).provide(:ruby) do
  Puppet.warning("Setting Property Class Variables")

  @@ex_order_classvars = {
    :example => true
  }

 (...)
end

</code></pre>

**Output**

<pre><code data-trim>

warning: Setting Property Class Variables

</code></pre>

<div style="text-align: center">

**WARNING**

</div>

<font color="red" style="text-align: center">

This may cause memory leaks unless you run in cron mode!

</font>
