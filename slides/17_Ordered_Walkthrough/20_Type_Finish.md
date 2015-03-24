<table width=100%>
  <tr>
    <td style="text-align: left"><h3>
        **Type**
    </h3></td>
    <td width=65% style="text-align: right"><h3>
        Finish
    </h3></td>
  </tr>
</table>

<pre><code data-trim class="ruby">

def finish
  Puppet.warning("#{self[:name]}: Type Finishing")

  # Don't forget to call this *at the end*
  super
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: test: Type Finishing

</code></pre>
