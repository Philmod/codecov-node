var gcb = require('../../lib/services/gcb')

describe('GCB CI Provider', function() {
  it('can detect GCB', function() {
    process.env.GCB = 'true'
    expect(gcb.detect()).to.be(true)
  })
  it('can get GCB env info get_commit_status', function() {
    process.env.GCB = 'true'
    process.env.BUILD_ID = '1234'
    process.env.COMMIT_SHA = '5678'
    process.env.BRANCH = 'master'
    process.env.REPO_NAME = 'owner/repo'
    expect(gcb.configuration()).to.eql({
      service: 'gcb',
      commit: '5678',
      branch: 'master',
      job: '1234',
      slug: 'owner/repo',
    })
  })
})
