import Vue, { CreateElement } from 'vue'
import Component from '../lib/index'

@Component
export default class World extends Vue {
  render(h: CreateElement) {
    return <p>World-: This is rendered via TSX</p>
  }
}
