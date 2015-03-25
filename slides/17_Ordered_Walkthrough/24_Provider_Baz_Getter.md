<table width=100%>
  <tr>
    <td style="text-align: left"><h3>
        **Provider**
    </h3></td>
    <td width=65% style="text-align: right"><h3>
        Baz|Getter
    </h3></td>
  </tr>
</table>

<pre><code data-trim class="ruby">

Puppet::Type.type(:example_type).provide(:ruby) do
  def baz
    # This is what 'is' ends up being in insync?
    Puppet.warning("#{@resource[:name]}: In getter for :baz")
  end
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

warning: test: In getter for :baz

</code></pre>
