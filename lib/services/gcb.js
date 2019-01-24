module.exports = {
  detect: function() {
    return !!process.env.GCB
  },

  configuration: function() {
    console.log('    Travis CI Detected')
    return {
      service: 'gcb',
      commit: process.env.COMMIT_SHA,
      job: process.env.BUILD_ID,
      branch: process.env.BRANCH,
      slug: process.env.REPO_NAME,
    }
  },
}
