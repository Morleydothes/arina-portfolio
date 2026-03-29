import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "photographerName",
      title: "Photographer Name",
      type: "string",
      initialValue: "Arina Zyryanova",
    }),
    defineField({
      name: "heroPhoto",
      title: "Hero Photo",
      type: "reference",
      to: [{ type: "photo" }],
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "telegramUrl",
      title: "Telegram URL",
      type: "url",
      initialValue: "https://t.me/vangogjiv",
    }),
  ],
});
