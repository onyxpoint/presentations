<table width=100%>
  <tr>
    <td style="text-align: left">
        <h3>**Type**</h3>
    </td>
    <td width=65% style="text-align: right">
        <h3>Validation</h3>
    </td>
  </tr>
</table>

<pre><code data-trim class="ruby">

validate do
  required_params = [:foo, :bar, :baz]
  Puppet.warning("#{self[:name]}: Validating")
  required_params.each do |param|
    if not self[param] then
      # Note how we show the user *where* the error is.
      raise Puppet::ParseError,"Oh noes! #{self.file}:#{self.line}"
    end
  end
end

</code></pre>

**Output**

<pre><code data-trim class="ruby">

Warning: test: Param :bar -> Validating

</code></pre>
