import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')

        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

fixture `fixture test`
    .page `https://www.baidu.com/`
    // 钩子函数
    .beforeEach(async t => {
        console.log('beforeEach')
    })
    .before(async cxt => {
        console.log('before')
    })
    .afterEach(async t => {
        console.log('afterEach')
    })
    .after(async cxt => {
        console.log('after')
    })

test('test', async t => {
    console.log('test');
})