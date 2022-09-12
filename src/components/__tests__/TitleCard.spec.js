import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TitleCard from '../TitleCard.vue'

describe('TitleCard', () => {
  it('renders properly', () => {
    const wrapper = mount(TitleCard, { props: { title: 'Fruta' } })
    expect(wrapper.text()).toContain('Fruta')
  })
})
