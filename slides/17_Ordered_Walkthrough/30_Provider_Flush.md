<table width=100%>
  <tr>
    <td style="text-align: left"><h3>
      **Provider**
    </h3></td>
    <td width=65% style="text-align: right"><h3>
      Flush
    </h3></td>
  </tr>
</table>

<pre><code data-trim class="ruby">

Puppet::Type.type(:example_type).provide(:ruby) do
  def flush
    # This happens if *any* property was modified.
    Puppet.warning("Time to flush #{@resource[:name]}")
  end
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: Time to flush test

</code></pre>
