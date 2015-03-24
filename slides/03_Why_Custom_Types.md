## Why Custom Types?

#### I can just use execs!

```ruby
# Custom Fact
if $facts['awesome_installed'] {
  exec { 'something_awesome':
    # Hopefully, this exists!
    command => '/usr/local/sbin/awesomeness',
    # Oh dear...
    onlyif  => '/bin/test ! -f /usr/local/share/awesome/conf -o \
               /usr/bin/pgrep awesome ...(you get it)'
  }
}
```
