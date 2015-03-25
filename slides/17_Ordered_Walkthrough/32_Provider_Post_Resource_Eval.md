<table width=100%>
  <tr>
    <td style="text-align: left"><h3>
      **Provider**
    </h3></td>
    <td width=65% style="text-align: right"><h3>
      Post-Resource Eval
    </h3></td>
  </tr>
</table>

<pre><code data-trim class="ruby">

# This is new in Puppet 3.4.0 and can be used for
# cleaning up any resource persistence since it happens after
# *all* resources of this type have been evaluated.

def self.post_resource_eval
  # Only YOU can prevent memory leaks!
  $example_type_classvars = nil

  Puppet.warning("FINIS!!!!")
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: FINIS!!!!

</code></pre>
