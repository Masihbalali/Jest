import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import Dashboard from './dashboard/page'

test('Page', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})


test('Page2', () => {
    expect(1 + 1).toBe(2)
})


test('another test', () => {
    expect(1 + 2).toBe(3)
})

test('should be four! ', () => {
    expect(Dashboard(4, 4)).toBe(8)
})
