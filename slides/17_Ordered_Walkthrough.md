
Full Execution Walkthrough
--------------------------

 You can find all code and output at [http://git.io/ZPuZNQ](https://gist.github.com/peiriannydd/7059200)<table><tr><td>
### ** Type **

</td><td>
###  Properties and Parameters

</td></tr></table>
```
 newparam(:name) do isnamevar end newparam(:foo) do Puppet.warning("Param :foo -> Starting") end newproperty(:baz) do Puppet.warning("Property :baz -> Starting") end newparam(:bar) do Puppet.warning("Param :bar -> Starting") end
```
**Output**

```
 warning: Param :foo -> Starting warning: Property :baz -> Starting warning: Param :bar -> Starting
```
<table><tr><td>
### ** Provider **

</td><td>
###  Globals

</td></tr></table>
```
 Puppet::Type.type(:ex_order).provide(:ruby) do Puppet.warning("Setting Property Class Variables") @@ex_order_classvars = { :example => true } (...) end
```
**Output**

```
 warning: Setting Property Class Variables
```
<table><tr><td>
### ** Type **

</td><td>
###  Name Parameter Munge

</td></tr></table>
```
 newparam(:name) do isnamevar munge do |value| Puppet.warning("#{value}: In the name parameter.") value end end
```
**Output**

```
 warning: test: In the name parameter.
```
<table><tr><td>
### ** Provider **

</td><td>
###  Initializer

</td></tr></table>
```
 def initialize(*args) super(*args) Puppet.warning("Provider Initialization :name= '#{@resource[:name]}'") Puppet.warning("Provider Initialization :foo = '#{@resource[:foo]}'") Puppet.warning("Provider Initialization :bar = '#{@resource[:bar]}'") end
```
**Output**

```
 warning: Provider Initialization :name= 'test' warning: Provider Initialization :foo = '' warning: Provider Initialization :bar = ''
```
<table><tr><td>
### ** Type **

</td><td>
###  Property|Baz

</td></tr></table>
```
 # newparam(:foo) do # newproperty(:baz) do # newparam(:bar) do
```

```
 newproperty(:baz) do validate do |value| Puppet.warning("#{resource[:name]}: :baz -> Validating") Puppet.warning("#{resource[:name]}: Foo -> '#{resource[:foo]}'") end end
```
**Output**

```
 warning: test: Property :baz -> Validating warning: test: Foo -> ''
```
<table><tr><td>
### ** Type **

</td><td>
###  Parameter|Foo

</td></tr></table>
```
 # newparam(:foo) do # newproperty(:baz) do # newparam(:bar) do
```

```
 newparam(:foo) do validate do |value| Puppet.warning("#{resource[:name]}: Param :foo -> Validating") end munge do |value| Puppet.warning("#{resource[:name]}: Param :foo -> Munging") Puppet.warning("Where's Param :bar? Bar is '#{resource[:bar]}'") value end end
```
**Output**

```
 warning: test: Param :foo -> Validating warning: test: Param :foo -> Munging warning: Where's Param :bar? Bar is ''
```
<table><tr><td>
### ** Type **

</td><td>
###  Parameter|Bar

</td></tr></table>
```
 # newparam(:foo) do # newproperty(:baz) do # newparam(:bar) do
```

```
 newparam(:bar) do Puppet.warning("Param :bar -> Starting") validate do |value| Puppet.warning("#{resource[:name]}: Param :bar -> Validating") end munge do |value| Puppet.warning("#{resource[:name]}: Param :bar -> Munging") Puppet.warning("Where's Param :foo? Foo is '#{resource[:foo]}'") value end end
```
**Output**

```
 warning: test: Param :bar -> Validating warning: test: Param :bar -> Munging warning: test: Where's Param :foo? Foo is 'foo'
```
<table><tr><td>
### ** Type **

</td><td>
###  Validation

</td></tr></table>
```
 validate do required_params = [:foo, :bar, :baz] Puppet.warning("#{self[:name]}: Validating") required_params.each do |param| if not self[param] then # Note how we show the user *where* the error is. raise Puppet::ParseError,"Oh noes! #{self.file}:#{self.line}" end end end
```
**Output**

```
 Warning: test: Param :bar -> Validating
```

ARE WE THERE YET?
=================

(Arrested Development, Fox/Netflix)

<table><tr><td>
### ** Type **

</td><td>
###  Initializing

</td></tr></table>
```
 def initialize(args) super(args) Puppet.warning("#{self[:name]}: Type Initializing") num_ex_orders = @catalog.resources.find_all { |r| r.is_a?(Puppet::Type.type(:ex_order)) }.count Puppet.warning("Ex_order's in the catalog: '#{num_ex_orders+1}'") end
```
**Output**

```
 warning: test: Type Initializing warning: Ex_order's in the catalog: '1'
```
<table><tr><td>
### ** Type **

</td><td>
###  Finish

</td></tr></table>
```
 def finish Puppet.warning("#{self[:name]}: Type Finishing") # Don't forget to call this *at the end* super end
```
**Output**

```
 warning: test: Type Finishing
```
<table><tr><td>
### ** Type **

</td><td>
###  Autorequires

</td></tr></table>
```
 autorequire(:file) do Puppet.warning("#{self[:name]}: Autorequring") ["/tmp/foo"] end
```
**Output**

```
 warning: test: Autorequring
```
<table><tr><td>
### ** Provider **

</td><td>
###  Baz|Getter

</td></tr></table>
```
 Puppet::Type.type(:ex_order).provide(:ruby) do def baz # This is what 'is' ends up being in insync? Puppet.warning("#{@resource[:name]}: In getter for :baz") end end
```
**Output**

```
 warning: test: In getter for :baz
```
<table><tr><td>
### ** Type **

</td><td>
###  Baz|Insync?

</td></tr></table>
```
 newproperty(:baz) do def insync?(is) # This is simply what the native provider code would do. is == @should # Note, you have to use @resource, not resource here since # you're not in the property any more, you're in the provider. Puppet.warning("#{@resource[:name]}: In 'insync?' for :baz") # We're returning false just to see the rest of the components # fire off. false end end
```
**Output**

```
 warning: test: In 'insync?' for :baz
```
<table><tr><td>
### ** Provider **

</td><td>
###  Baz|Setter

</td></tr></table>
```
 Puppet::Type.type(:ex_order).provide(:ruby) do def baz=(should) # Called if insync? is false Puppet.warning("#{@resource[:name]}: In setter for :baz") end end
```
**Output**

```
 warning: test: In setter for :baz notice: /Stage[main]/Main/Ex_order[test]/baz: baz changed 'test: In getter for :baz' to 'baz'
```
<table><tr><td>
### ** Provider **

</td><td>
###  Flush

</td></tr></table>
```
 Puppet::Type.type(:ex_order).provide(:ruby) do def flush # This happens if *any* property was modified. Puppet.warning("Time to flush #{@resource[:name]}") end end
```
**Output**

```
 warning: Time to flush test
```
<table><tr><td>
### ** Provider **

</td><td>
###  Post-Resource Eval

</td></tr></table>
```
 # This is new in Puppet 3.4.0 and can be used for # cleaning up any resource persistence since it happens after # *all* resources of this type have been evaluated. def self.post_resource_eval Puppet.warning("FINIS!!!!") end
```
**Output**

```
 warning: FINIS!!!!
```
