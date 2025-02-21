import { useLocalePath } from "#i18n";
import { defineComponent, computed, h } from "vue";
import { defineNuxtLink } from "#imports";
import { hasProtocol } from "ufo";
import { nuxtLinkDefaults } from "#build/nuxt.config.mjs";
const NuxtLinkLocale = defineNuxtLink({ ...nuxtLinkDefaults, componentName: "NuxtLinkLocale" });
export default defineComponent({
  name: "NuxtLinkLocale",
  props: {
    ...NuxtLinkLocale.props,
    locale: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(props, { slots }) {
    const localePath = useLocalePath();
    const checkPropConflicts = (props2, main, sub) => {
      if (import.meta.dev && props2[main] !== void 0 && props2[sub] !== void 0) {
        console.warn(`[NuxtLinkLocale] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
      }
    };
    const resolvedPath = computed(() => {
      const destination = props.to ?? props.href;
      return destination != null ? localePath(destination, props.locale) : destination;
    });
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      if (props.target && props.target !== "_self") {
        return true;
      }
      const destination = props.to ?? props.href;
      if (typeof destination === "object") {
        return false;
      }
      return destination === "" || destination == null || hasProtocol(destination, { acceptRelative: true });
    });
    const getNuxtLinkProps = () => {
      const _props = {
        ...props
      };
      if (!isExternal.value) {
        _props.to = resolvedPath.value;
      }
      checkPropConflicts(props, "to", "href");
      delete _props.href;
      delete _props.locale;
      return _props;
    };
    return () => h(NuxtLinkLocale, getNuxtLinkProps(), slots.default);
  }
});
