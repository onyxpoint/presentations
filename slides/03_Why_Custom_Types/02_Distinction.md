## Translation

```ruby
# Confine Statement
if $facts['awesome_installed'] {
# Red Hat Provider
  if $facts['osfamily'] == 'RedHat' {
    $onlyif = '/bin/test ! -f /etc/awesome.conf -o \
               /usr/bin/pgrep awesome...'
  }

# Debian Provider
  if $facts['osfamily'] == 'Debian' {
    $onlyif = '/bin/test ! -f /etc/defaults/awesome -o \
               /usr/bin/pgrep deb_awesome...'
  }

  exec { 'something_awesome':
    command => '/usr/local/sbin/awesomeness',
    # insync?
    onlyif  => $onlyif
  }
}
```
