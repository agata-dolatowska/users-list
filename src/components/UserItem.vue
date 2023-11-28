<template>
    <li
        class="list-item"
    >
        <img
            :src="user.avatar"
            class="list-item-image"
        />
        <div class="list-item-content">
        <p
            class="user-name"
        >
            {{ $props.user.first_name }} {{ $props.user.last_name }}
        </p>
        <p
            class="user-email"
        >
            {{ $props.user.email }}
        </p>
      </div>
    </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['user']
})
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  margin: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &-image {
        border-radius: 50%;
        width: 64px;
    }

    &-content {
        margin-left: 20px;

        p {
            margin: 0;
            text-align: left;
        }

    .user-name {
        margin-top: 10px;
        font-size: var(--font-size);
    }

    .user-email {
        font-size: calc(var(--font-size) - 5px);
    }

    p {
        margin-top: 5px;
        opacity: .7
    }
  }
}
</style>