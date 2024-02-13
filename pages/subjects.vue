<script setup lang="ts">
import SubjectCard from "~/components/containers/SubjectCard.vue";
</script>

<template>
	<div class="flex flex-col gap-4">
		<SubjectCard v-for="subject in subjects" :subject="subject" />
	</div>
</template>

<style scoped></style>
