foo = require '../app/foo/foo.coffee'

describe 'foo', ->
  it 'should return a message', ->
    expect(foo('msg')).toEqual('The message is: msg')
