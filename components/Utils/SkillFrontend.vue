<script setup>
function functiontest() {
  console.log("test");
}
</script>
<template>
  <section class="flex h-max w-[100%] flex-row flex-wrap gap-2 rounded-md">
    <UtilsSkillFrame class="html" id="html" @click="functiontest">
      <template #skill-icon>
        <Icon size="7em" name="vscode-icons:file-type-html" />
      </template>
      <template #skill-name>html</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="css">
      <template #skill-icon>
        <Icon size="7em" name="vscode-icons:file-type-css2" />
      </template>
      <template #skill-name>css</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="javascript">
      <template #skill-icon>
        <Icon size="7em" name="devicon:javascript" />
      </template>
      <template #skill-name>javascript</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="figma">
      <template #skill-icon>
        <Icon size="7em" name="material-icon-theme:figma" />
      </template>
      <template #skill-name>figma</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="github">
      <template #skill-icon>
        <Icon size="7em" name="octicon:mark-github-16" />
      </template>
      <template #skill-name>github</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="bootstrap">
      <template #skill-icon>
        <Icon size="7em" name="devicon:bootstrap" />
      </template>
      <template #skill-name>bootstrap</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="tailwindcss">
      <template #skill-icon>
        <Icon size="7em" name="devicon:tailwindcss" />
      </template>
      <template #skill-name>tailwindcss</template>
    </UtilsSkillFrame>
  </section>
</template>
