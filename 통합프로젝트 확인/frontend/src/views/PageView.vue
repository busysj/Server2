<template>
  <div>
    <h1>{{ memo.title }}</h1>
    <p>{{ memo.memo }}</p>
  </div>
</template>

<script>
export default {
  created() {
    // /api/memo/파람id를 넣어서 전달
    // memo.id로 구분해서 그 객체만 들고올 수 있다
    // id값을 어디에서 들고오는가,
    this.$http.get(`/api/memo/${this.$route.params.id}`).then((response) => {
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
