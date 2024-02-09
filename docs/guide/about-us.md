<!-- Team information -->
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://japi.rest/discord/v1/user/773193286776389653/avatar',
    name: 'Axel',
    title: 'Owner',
    links: [
      { icon: 'github', link: 'https://github.com/kakarot-dev' },
      { icon: 'discord', link: 'https://discord.com/users/773193286776389653' }
    ]
  },
  {
    avatar: 'https://japi.rest/discord/v1/user/741549223127941170/avatar',
    name: 'Preet Suthar',
    title: 'Co-Owner & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/preetsuthar17' },
      { icon: 'discord', link: 'https://discord.com/users/741549223127941170' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/preet-suthar-41b460243/' }
    ]
  },
  {
    avatar: 'https://japi.rest/discord/v1/user/510065483693817867/avatar',
    name: 'Toxic Dev',
    title: 'Co-Owner & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/TheRealToxicDev' },
      { icon: 'discord', link: 'https://discord.com/users/510065483693817867' }
    ]
  },  
]

const members2 = [

  {
    avatar: 'https://japi.rest/discord/v1/user/766983509944172554/avatar',
    name: 'Breezely',
    title: 'Community Manager',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/766983509944172554' }
    ]
  },
  {
    avatar: 'https://japi.rest/discord/v1/user/877402928745447435/avatar',
    name: 'Afnan',
    title: 'Developer',
    links: [
        { icon: 'github', link: 'https://github.com/Afnanksalal' },
      { icon: 'discord', link: 'https://discord.com/users/877402928745447435' }
    ]
  },
]

const members3 = [
{
    avatar: 'https://japi.rest/discord/v1/user/622890595614195722/avatar',
    name: 'Tazhys',
    title: 'System Manager',
    links: [
        { icon: 'github', link: 'https://github.com/tazhys' },
        { icon: 'discord', link: 'https://discord.com/users/622890595614195722' }
    ]
  },
  {
    avatar: 'https://japi.rest/discord/v1/user/1180973138998210667/avatar',
    name: 'Ryuu',
    title: 'Billing Manager',
    links: [
        { icon: 'discord', link: 'https://discord.com/users/1180973138998210667' }
    ]
  },
]
</script>

# About us

Introducing our dedicated developers tirelessly working around the clock to ensure Assistify remains up-to-date and delivers optimal user experience.

You can reach all of our teams members in our [discord server](https://dsc.gg/assistify).

## Admins
<VPTeamMembers size="small" :members="members" />

## Digital Managers
<VPTeamMembers size="small" :members="members2" />

## Administrative Managers
<VPTeamMembers size="small" :members="members3" />