<template>
  <div>
    <TheLanding />
    <TheAbout />
    <TheSkills />
    <TheWork />
  </div>
</template>

<script>
import TheLanding from '@/components/TheLanding'
import TheAbout from '@/components/TheAbout'
import TheSkills from '@/components/TheSkills'
import TheWork from '@/components/TheWork'

export default {
  components: {
    TheLanding,
    TheAbout,
    TheSkills,
    TheWork,
  }
}
</script>
