## Different Operating Systems

```ruby
if $facts['awesome_installed'] {
  if $facts['osfamily'] == 'RedHat' {
    $onlyif = '/bin/test ! -f /etc/awesome.conf -o \
               /usr/bin/pgrep awesome...'
  }

  if $facts['osfamily'] == 'Debian' {
    $onlyif = '/bin/test ! -f /etc/defaults/awesome -o \
               /usr/bin/pgrep deb_awesome...'
  }

  exec { 'something_awesome':
    command => '/usr/local/sbin/awesomeness',
    onlyif  => $onlyif
  }
}
```
