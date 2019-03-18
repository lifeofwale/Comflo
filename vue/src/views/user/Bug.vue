<template>
  <div class="signup">
    <div class="h-100">
      <Header></Header>
      <div class="row mt-lg-3">
        <div class="col-md-12 mt-lg-2">
          <div class="container signup-panel p-lg-3">
            <p class="demo-form-title text-gray text-center"><strong>Report a bug</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bug',
  created () {
    let jira = document.createElement('script')
    jira.setAttribute('src', 'https://comflo.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/b6rpgs/b/3/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=ae1eb938')
    document.head.appendChild(jira)
  }
}
</script>
