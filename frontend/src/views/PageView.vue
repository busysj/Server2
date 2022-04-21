<template>
  <div>
    <p>{{ memo.memo }}</p>
  </div>
</template>

<script>
export default {
  created() {
    // memo의 id값을 가져오기 위해서 router의 params
    this.$http.get(`/api/memo/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.memo = response.data;
    });
  },
  data() {
    return {
      memo: {},
    };
  },
};
</script>
