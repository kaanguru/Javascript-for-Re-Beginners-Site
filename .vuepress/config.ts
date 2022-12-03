import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  lang: "en-US",
  title: "Javascript for Re-Beginners",
  description: " Let’s Learn ALL JavaScript, starting from scratch",
  theme: defaultTheme({
    logo: "/img/CK-JS-Re-Beginners.png",
    navbar: [
      {
        text: "Meet Again",
        children: ["/01_meet_again/01_what-is.md", "/01_meet_again/02_history.md", "/01_meet_again/03_manuals.md", "/01_meet_again/04_hello.md", "/01_meet_again/05_tooling.md", "/01_meet_again/06_use-strict.md"],
      },
      {
        text: "Grammar",
        children: [
          {
            text: "Sentence Structure",
            children: ["/02_grammar/01_structure/01_text.md", "/02_grammar/01_structure/02_unicode.md", "/02_grammar/01_structure/03_semicolons.md"],
          },
          {
            text: "Words",
            children: ["/02_grammar/02_words/01_types-symbols.md", "/02_grammar/02_words/02_mutable-immutable.md", "/02_grammar/02_words/02_mutable-immutable.md"],
          },
          {
            text: "Parts of Language",
            children: ["/02_grammar/03_expressions-operators/01_expressions.md", "/02_grammar/03_expressions-operators/02_access-expression.md", "/02_grammar/03_expressions-operators/03_operators.md"],
          },
          {
            text: "Statements",
            children: ["/02_grammar/04_statements/01_expression-statements.md", "/02_grammar/04_statements/02_conditionals.md", "/02_grammar/04_statements/03_loops.md", "/02_grammar/04_statements/04_jumps.md"],
          },
          {
            text: "Objects",
            children: ["/02_grammar/05_objects/01_create-query-set-objects.md", "/02_grammar/05_objects/02_delete-test-enumerate-objects.md", "/02_grammar/05_objects/03_extend-serialize-objects.md", "/02_grammar/05_objects/04_object-methods.md", "/02_grammar/05_objects/05_extended-object-literal-syntax.md"],
          },
          {
            text: "Nouns , Pronouns and Adjectives",
            children: ["/02_grammar/06_collections/01_crud-arrays.md", "/02_grammar/06_collections/02_iterating-arrays", "/02_grammar/06_collections/03_array-methods", "/02_grammar/06_collections/04_objects-like-array", "/02_grammar/06_collections/05_maps"],
          },
          {
            text: "Verbs",
            children: ["/02_grammar/07_functions/01_functions", "/02_grammar/07_functions/02_arguments-parameters", "/02_grammar/07_functions/03_closures"],
          },
          {
            text: "Clauses",
            children: ["/02_grammar/08_classes/01_classes", "/02_grammar/08_classes/02_extend", "/02_grammar/08_classes/03_mixins"],
          },
          {
            text: "Tenses",
            children: ["/02_grammar/09_asynchronous/01_asynchronous", "/02_grammar/09_asynchronous/02_promises", "/02_grammar/09_asynchronous/03_async-await"],
          },
        ],
      },
      {
        text: "Literature",
        children: [
          {
            text: "Organization by Chapters",
            children: [
              // "Modules"
            ],
          },
          {
            text: "Meta Programming",
            children: [
              // "Proxies", "Reflect API"
            ],
          },
          {
            text: "Poetry",
            children: [
              // "clean code", "TDP"
            ],
          },
          {
            text: "Object Oriented Programming",
            children: [],
          },
          {
            text: "Functional Programming",
            children: [],
          },
          {
            text: "Browser",
            children: [
              // "Document", "Events", "Interfaces", "Memory", "Network", "Animation", "Regex", "Vite"
            ],
          },

          {
            text: "Node",
            children: [],
          },
          {
            text: "TypeScript ",
            children: [],
          },
          {
            text: "Deno",
            children: [],
          },
          {
            text: "Vue",
            children: [],
          },
          {
            text: "Svelte",
            children: [],
          },
          {
            text: "Web3",
            children: [],
          },
        ],
      },
    ],
  }),
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules", "!README.md"],
  plugins: [
    searchPlugin(),
    componentsPlugin({
      components: ["Badge", "CodePen", "FontIcon", "YouTube"],
      iconAssets: "fontawesome",
    }),

  ],
});
