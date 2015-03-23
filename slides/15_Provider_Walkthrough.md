
### Provider Scaffold

```
 Puppet::Type.type(:ex_order).provide(:ruby) do @@ex_order_classvars = { :example => true } def initialize(*args) super(*args) end def baz # Get the state of the 'baz' property from the system end def baz=(should) # Set the system to the value of the 'baz' property in Puppet end def flush # If *any* property is not in sync, this will be called end end
```
