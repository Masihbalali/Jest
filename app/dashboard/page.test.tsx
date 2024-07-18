import { expect, test } from 'vitest'

import Dashboard from './page'

test('should be four! ', () => {
    expect(Dashboard(2, 2)).toBe(4)
})

