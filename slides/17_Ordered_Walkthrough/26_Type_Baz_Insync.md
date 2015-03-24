<table width=100%>
  <tr>
    <td style="text-align: left"><h3>
        **Type**
    </h3></td>
    <td width=65% style="text-align: right"><h3>
        Baz|Insync?
    </h3></td>
  </tr>
</table>

<pre><code data-trim class="ruby">

newproperty(:baz) do
  def insync?(is)
    # This is simply what the native provider code would do.
    is == @should

    # Note, you have to use @resource, not resource here since
    # you're not in the property any more, you're in the provider.
    Puppet.warning("#{@resource[:name]}: In 'insync?' for :baz")

    # We're returning false just to see the rest of the components
    # fire off.
    false
  end
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: test: In 'insync?' for :baz

</code></pre>
