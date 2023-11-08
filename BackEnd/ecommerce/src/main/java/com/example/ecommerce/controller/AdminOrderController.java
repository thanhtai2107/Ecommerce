package com.example.ecommerce.controller;

import com.example.ecommerce.dto.OrderDTO;
import com.example.ecommerce.exception.OrderException;
import com.example.ecommerce.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1/admin")
public class AdminOrderController {
    private final OrderService orderService;

    public AdminOrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/orders")
    public ResponseEntity<List<OrderDTO>> getOrders() throws OrderException {
        try {
            return ResponseEntity.ok(orderService.getAllOrder());
        } catch (OrderException e) {
            throw new OrderException("Lỗi");
        }
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<OrderDTO> getOrder(
            @PathVariable Long id
    ) throws OrderException {
        try {
            return ResponseEntity.ok(orderService.findOrderById(id));
        } catch (OrderException e) {
            throw new OrderException(("Lỗi"));
        }
    }

    @PutMapping("/orders/confirm/{id}")
    public ResponseEntity<OrderDTO> confirmOrder(@PathVariable Long id,@RequestParam(defaultValue = "CONFIRM", required = false) String status) throws OrderException{
        try{
            return ResponseEntity.ok(orderService.comfirmOrder(id,status));
        } catch(OrderException e) {
            throw new OrderException("Lỗi");
        }
    }

    @PutMapping("/orders/cancel/{id}")
    public ResponseEntity<OrderDTO> cancelOrder(@PathVariable Long id,
                                                @RequestParam(defaultValue = "CANCEL",required = false) String status) throws OrderException{
        try{
            return ResponseEntity.ok(orderService.cancelOrder(id, status));
        } catch(OrderException e) {
            throw new OrderException("Lỗi");
        }
    }
}
