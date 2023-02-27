import dns from 'node:dns';

dns.lookup('g1.globo.com', (err, address) => {
    if(err) return console.log(err);
    console.log('lookup: ', address);
});

dns.resolve4('g1.globo.com', (err, address) => {
    if(err) return console.log(err);
    console.log('resolve4: ', address);
});

dns.resolve6('g1.globo.com', (err, address) => {
    if(err) return console.log(err);
    console.log('resolve6: ', address);
});

dns.resolveTxt('g1.globo.com', (err, address) => {
    if(err) return console.log(err);
    console.log('resolveTxt: ', address);
});

dns.resolve('g1.globo.com', 'A', (err, address) => {
    if(err) return console.log(err);
    console.log('resolve: ', address);
});

dns.reverse('186.192.81.31', (err, address) => {
    if(err) return console.log(err);
    console.log('resolveTxt: ', address);
});
