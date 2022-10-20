<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "ConnectBank",
  props: {
    bankDetails: {
      type: Object,
      default: () => null
    },
  }
}
</script>
