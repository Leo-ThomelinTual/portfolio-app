<script setup></script>
<template>
  <section class="flex flex-row flex-wrap gap-2 rounded-md">
    <UtilsSkillFrame class="html flex-grow" id="html">
      <template #skill-icon>
        <Icon size="7em" name="vscode-icons:file-type-html" />
      </template>
      <template #skill-name>html</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="css flex-grow">
      <template #skill-icon>
        <Icon size="7em" name="vscode-icons:file-type-css2" />
      </template>
      <template #skill-name>css</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="javascript flex-grow">
      <template #skill-icon>
        <Icon size="7em" name="devicon:javascript" />
      </template>
      <template #skill-name>javascript</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="flex-grow figma">
      <template #skill-icon>
        <Icon size="7em" name="material-icon-theme:figma" />
      </template>
      <template #skill-name>figma</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="flex-grow github">
      <template #skill-icon>
        <Icon size="7em" name="octicon:mark-github-16" />
      </template>
      <template #skill-name>github</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="flex-grow bootstrap">
      <template #skill-icon>
        <Icon size="7em" name="devicon:bootstrap" />
      </template>
      <template #skill-name>bootstrap</template>
    </UtilsSkillFrame>
    <UtilsSkillFrame class="flex-grow tailwindcss">
      <template #skill-icon>
        <Icon size="7em" name="devicon:tailwindcss" />
      </template>
      <template #skill-name>tailwindcss</template>
    </UtilsSkillFrame>
  </section>
</template>
