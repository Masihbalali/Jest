import { expect, test } from 'vitest'

import Dashboard from './page'

test('should be four! ', () => {
    expect(Dashboard(4, 4)).toBe(8)
})

