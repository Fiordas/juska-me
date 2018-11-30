<template>
  <div>
    <TheLanding />
    <TheAbout />
    <TheSkills />
    <TheWork />
    <TheContacts />
  </div>
</template>

<script>
import TheLanding from '@/components/TheLanding'
import TheAbout from '@/components/TheAbout'
import TheSkills from '@/components/TheSkills'
import TheWork from '@/components/TheWork'
import TheContacts from '@/components/TheContacts'

export default {
  components: {
    TheLanding,
    TheAbout,
    TheSkills,
    TheWork,
    TheContacts
  }
}
</script>
