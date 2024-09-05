// import { defineConfig } from "tinacms";

// // Your hosting provider likely exposes this as an environment variable
// const branch =
//   process.env.GITHUB_BRANCH ||
//   process.env.VERCEL_GIT_COMMIT_REF ||
//   process.env.HEAD ||
//   "main";

// export default defineConfig({
//   branch,

//   // Get this from tina.io
//   clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
//   // Get this from tina.io
//   token: process.env.TINA_TOKEN,

//   build: {
//     outputFolder: "admin_default",
//     publicFolder: "/",
//   },
//   media: {
//     tina: {
//       mediaRoot: "",
//       publicFolder: "static",
//     },
//   },
//   // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
//   schema: {
//     collections: [
//       {
//         label: "Site Configuration",
//         name: "config",
//         path: "/",
//         format: "toml",
//         fields: [
//           {
//             type: "string",
//             name: "theme",
//             label: "Theme",
//             options: [
//               { value: "mini", label: "mini" },
//               { value: "paper", label: "paper" },
//               { value: "tailwind", label: "tailwind" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "post",
//         label: "Posts",
//         path: "content/posts",
//         fields: [
//           {
//             type: "string",
//             name: "title",
//             label: "Title",
//             isTitle: true,
//             required: true,
//           },
//           {
//             type: "datetime",
//             name: "date",
//             label: "Date",
//             required: true,
//           },
//           {
//             type: "string",
//             name: "status",
//             label: "Status: draft of published",
//             options: [
//               { value: "draft", label: "Draft" }, // Tùy chọn "Draft"
//               { value: "published", label: "Published" }, // Tùy chọn "Published"
//             ],
//             required: true,
//           },
//           {
//             type: "rich-text",
//             name: "body",
//             label: "Body",
//             isBody: true,
//           },
//         ],
//       },
//     ],
//   },
// });

import { defineConfig } from "tinacms";

export default defineConfig({
  build: {
    outputFolder: "admin_default",
    publicFolder: "/",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "Site Configuration",
        name: "config",
        path: "/",
        format: "toml",
        fields: [
          {
            type: "string",
            name: "theme",
            label: "Theme",
            required: true,
            options: [
              { value: "paper", label: "paper" },
              { value: "PaperMod", label: "PaperMod" },
              { value: "mainroad", label: "mainroad" },
              { value: "fluency", label: "fluency" },
            ],
          },
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "string",
            name: "status",
            label: "Status: draft of published",
            options: [
              { value: "draft", label: "draft" },
              { value: "published", label: "published" },
            ],
            required: true,
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
