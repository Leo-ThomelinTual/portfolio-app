<script setup lang="ts">
function functiontest() {
  console.log("test");
}
</script>

<template>
  <section
    class="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto_1fr_1fr_1fr_1fr] gap-2 p-2 rounded-md h-[95vh] w-max"
  >
    <SkillFrame class="html" id="html">
      <template #skill-icon @click="functiontest">
        <Icon size="7em" name="vscode-icons:file-type-html" />
      </template>
      <template #skill-name>html</template>
    </SkillFrame>
    <SkillFrame class="css">
      <template #skill-icon>
        <Icon size="7em" name="vscode-icons:file-type-css2" />
      </template>
      <template #skill-name>css</template>
    </SkillFrame>
    <SkillFrame class="mysql">
      <template #skill-icon>
        <Icon size="7em" name="vscode-icons:file-type-mysql" />
      </template>
      <template #skill-name>mysql</template>
    </SkillFrame>
    <SkillFrame class="javascript">
      <template #skill-icon>
        <Icon size="7em" name="devicon:javascript" />
      </template>
      <template #skill-name>javascript</template>
    </SkillFrame>
    <SkillFrame class="figma">
      <template #skill-icon>
        <Icon size="7em" name="material-icon-theme:figma" />
      </template>
      <template #skill-name>figma</template>
    </SkillFrame>
    <SkillFrame class="github">
      <template #skill-icon>
        <Icon size="7em" name="octicon:mark-github-16" />
      </template>
      <template #skill-name>github</template>
    </SkillFrame>
    <SkillFrame class="symfony">
      <template #skill-icon>
        <Icon size="7em" name="skill-icons:symfony-dark" />
      </template>
      <template #skill-name>symfony</template>
    </SkillFrame>
    <SkillFrame class="bootstrap">
      <template #skill-icon>
        <Icon size="7em" name="devicon:bootstrap" />
      </template>
      <template #skill-name>bootstrap</template>
    </SkillFrame>
    <SkillFrame class="tailwindcss">
      <template #skill-icon>
        <Icon size="7em" name="devicon:tailwindcss" />
      </template>
      <template #skill-name>tailwindcss</template>
    </SkillFrame>
    <SkillFrame> </SkillFrame>
  </section>
</template>

<style scoped>
.html:hover {
  box-shadow: 0 0 10px 5px orange;
}
.css:hover {
  box-shadow: 0 0 10px 5px rgb(24, 103, 192);
}
.mysql:hover {
  box-shadow: 0 0 10px 5px rgb(1, 146, 172);
}
.javascript:hover {
  box-shadow: 0 0 10px 5px rgb(110, 110, 16);
}
.figma:hover {
  box-shadow: 0 0 10px 5px #2c2c2c;
}
.github:hover {
  box-shadow: 0 0 10px 5px rgb(137, 146, 148);
}
.symfony:hover {
  box-shadow: 0 0 10px 5px rgb(59, 59, 59);
}
.bootstrap:hover {
  box-shadow: 0 0 10px 5px rgb(95, 1, 172);
}
.tailwindcss:hover {
  box-shadow: 0 0 10px 5px rgb(0, 217, 255);
}
</style>
