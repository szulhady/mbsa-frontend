export const BarChartHorizontal = () => import('../..\\components\\BarChartHorizontal.vue' /* webpackChunkName: "components/bar-chart-horizontal" */).then(c => wrapFunctional(c.default || c))
export const BarChartVertival = () => import('../..\\components\\BarChartVertival.vue' /* webpackChunkName: "components/bar-chart-vertival" */).then(c => wrapFunctional(c.default || c))
export const DetailBuilding = () => import('../..\\components\\DetailBuilding.vue' /* webpackChunkName: "components/detail-building" */).then(c => wrapFunctional(c.default || c))
export const DetailCard = () => import('../..\\components\\DetailCard.vue' /* webpackChunkName: "components/detail-card" */).then(c => wrapFunctional(c.default || c))
export const DetailCards = () => import('../..\\components\\DetailCards.vue' /* webpackChunkName: "components/detail-cards" */).then(c => wrapFunctional(c.default || c))
export const Frame = () => import('../..\\components\\Frame.vue' /* webpackChunkName: "components/frame" */).then(c => wrapFunctional(c.default || c))
export const Frame2 = () => import('../..\\components\\Frame2.vue' /* webpackChunkName: "components/frame2" */).then(c => wrapFunctional(c.default || c))
export const Frame3 = () => import('../..\\components\\Frame3.vue' /* webpackChunkName: "components/frame3" */).then(c => wrapFunctional(c.default || c))
export const Frame4 = () => import('../..\\components\\Frame4.vue' /* webpackChunkName: "components/frame4" */).then(c => wrapFunctional(c.default || c))
export const LineGraph = () => import('../..\\components\\LineGraph.vue' /* webpackChunkName: "components/line-graph" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Maps = () => import('../..\\components\\Maps.vue' /* webpackChunkName: "components/maps" */).then(c => wrapFunctional(c.default || c))
export const Maps2 = () => import('../..\\components\\Maps2.vue' /* webpackChunkName: "components/maps2" */).then(c => wrapFunctional(c.default || c))
export const MbsaEnergyConsumption = () => import('../..\\components\\MbsaEnergyConsumption.vue' /* webpackChunkName: "components/mbsa-energy-consumption" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
